SELECT PO.NR_ID,
       PO.NR_ID_CURSO,
       PO.NR_ID_INSTITUICAO,
       PO.NR_ID_PROPOSTA_UNI,
       PO.DS_NOME,
       PO.DS_DESC_PROJETO,
       PO.CD_STATUS,
       PO.DS_REQUISITO,
       PO.QT_PARTICIPANTES,
       PO.DS_DURACAO,
       PO.DS_INFO_CONTATOS,
       PO.DS_TIPO,
       PO.DT_GERACAO
  FROM PROPOSTA PO,
       CURSO CR
 WHERE PO.NR_ID_CURSO = CR.NR_ID
   AND PO.NR_ID_CURSO = &NR_ID_CURSO
