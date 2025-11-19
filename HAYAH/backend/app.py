from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app) 

JSON_PERFIL = "registro_perfis.json"
JSON_RECRUTADORES = "registro_recrutadores.json"

registros_perfil = []
registro_candidaturas = {}
registro_recrutadores = []

# Função para normalizar o CPF (feita com base da usada na Sprint 4)
def normalizar_cpf(cpf: str) -> str:
    return ''.join(ch for ch in (cpf or "") if ch.isdigit())

# ------- Funções de perfil de candidato -------

# Carregar perfis de candidatos no json
def carregar_perfil():
    global registros_perfil
    if not os.path.exists(JSON_PERFIL):
        registros_perfil = []
        return
    try:
        with open(JSON_PERFIL, "r", encoding="utf-8") as f:
            data = json.load(f)
            registros_perfil = data.get("perfis", [])
    except Exception as e:
        print("Erro ao carregar perfis:", e)
        registros_perfil = []

# salvar perfis de candidatos no json
def salvar_perfis():
    try:
        with open(JSON_PERFIL, "w", encoding="utf-8") as f:
            json.dump({"perfis": registros_perfil}, f, indent=4, ensure_ascii=False)
    except Exception as e:
        print("Erro ao salvar perfis:", e)

# Função para criar perfil, verificando se o perfil ja existe
def criar_perfil(id, cpf, senha, cargo, localizacao, habilidades_tecnicas, softskills, experiencias, formacao, projetos, certificacoes, idiomas, areainteresses):
    for perfil in registros_perfil:
        if perfil["id"] == id or normalizar_cpf(perfil["cpf"]) == normalizar_cpf(cpf):
            return None

    def gerar_id():
        if registros_perfil:
            return max(p["id"] for p in registros_perfil) + 1
        return 1

    id_gerado = gerar_id()

    perfil = {
        "id": id_gerado,
        "cpf": cpf,
        "senha": senha,
        "cargo": cargo,
        "localizacao": localizacao,
        "habilidades_tecnicas": habilidades_tecnicas,
        "softskills": softskills,
        "experiencias": experiencias,
        "formacao": formacao,
        "projetos": projetos,
        "certificacoes": certificacoes,
        "idiomas": idiomas,
        "areainteresses": areainteresses
    }

    registros_perfil.append(perfil)
    salvar_perfis()
    return id_gerado

# ------- Fim das funções de perfil de candidato -------

# ------- Funções de recrutadores -------

# Carregar json de recrutadores
def carregar_recrutadores():
    global registro_recrutadores
    if not os.path.exists(JSON_RECRUTADORES):
        registro_recrutadores = []
        return
    try:
        with open(JSON_RECRUTADORES, "r", encoding="utf-8") as f:
            data = json.load(f)
            registro_recrutadores = data.get("recrutadores", [])
    except Exception as e:
        print("Erro ao carregar recrutadores:", e)
        registro_recrutadores = []


# Salvar json de recrutadores
def salvar_recrutadores():
    try:
        with open(JSON_RECRUTADORES, "w", encoding="utf-8") as f:
            json.dump({"recrutadores": registro_recrutadores}, f, indent=4, ensure_ascii=False)
    except Exception as e:
        print("Erro ao salvar recrutadores:", e)

def criar_recrutador(nome, cpf, senha):
    for i in registro_recrutadores:
        if i["cpf"] == cpf:
            return None

    novo = {
        "id": len(registro_recrutadores) + 1,
        "nome": nome,
        "cpf": cpf,
        "senha": senha
    }

    registro_recrutadores.append(novo)
    salvar_recrutadores()
    return novo["id"]

# ------- Fim das funções de recrutadores -------


# ------- Usando flask --------

# Flask para login de candidato
@app.post("/loginCandidato")
def loginCandidato():
    data = request.get_json()
    cpf = normalizar_cpf(data.get("cpf"))
    senha = data.get("senha")

    carregar_perfil()

    per = None

    for p in registros_perfil:
        if normalizar_cpf(p["cpf"]) == cpf and p["senha"] == senha:
            per = p
            break

    if per is None:
        return jsonify({"mensagem": "CPF ou senha incorretos"}), 401

    return jsonify({
        "mensagem": "Login OK",
    })


# Flask para login de recrutador
@app.post("/loginRecrutador")
def loginRecrutador():
    data = request.get_json()
    cpf = normalizar_cpf(data.get("cpf"))
    senha = data.get("senha")

    carregar_recrutadores()

    recrutador = None

    for r in registro_recrutadores:
        if normalizar_cpf(r["cpf"]) == cpf and r["senha"] == senha:
            recrutador = r
            break

    if recrutador is None:
        return jsonify({"mensagem": "CPF ou senha incorretos"}), 401

    return jsonify({
        "mensagem": "Login OK",
    })

if __name__ == "__main__":
    carregar_perfil()
    carregar_recrutadores()
 
    criar_perfil(
        id=None,
        cpf="123.456.789-00",
        senha="senha123",
        cargo="Desenvolvedor Python",
        localizacao="São Paulo",
        habilidades_tecnicas=["Python", "Flask", "APIs"],
        softskills=["Comunicação", "Resiliência"],
        experiencias=["2 anos como Dev Python na XPTO"],
        formacao=["Engenharia de Software - USP"],
        projetos=["API de Recrutamento", "Sistema de RH"],
        certificacoes=["Certificação Python PCEP"],
        idiomas=["Inglês Avançado"],
        areainteresses=["Back-end", "Automação"]
    )

    criar_perfil(
        id=None,
        cpf="122.345.678-00",
        senha="senhaa",
        cargo="Desenvolvedor Python",
        localizacao="São Paulo",
        habilidades_tecnicas=["Python", "Flask", "APIs"],
        softskills=["Comunicação", "Resiliência"],
        experiencias=["2 anos como Dev Python na XPTO"],
        formacao=["Engenharia de Software - USP"],
        projetos=["API de Recrutamento", "Sistema de RH"],
        certificacoes=["Certificação Python PCEP"],
        idiomas=["Inglês Avançado"],
        areainteresses=["Back-end", "Automação"]
    )
 
    criar_recrutador(
        nome="Maria Recrutadora",
        cpf="123-456-789-99",
        senha="admin123"
    )

    app.run(debug=True)
