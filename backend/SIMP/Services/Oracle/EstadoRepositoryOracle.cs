using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{

    public class EstadoRepositoryOracle : TableBaseRepositoryOracle, IEstadoRepository{

        public EstadoRepositoryOracle(IConfiguration configuration) : base(configuration) { }

        public async Task<Estado> GetById(int Id){
            return await Connection.QueryFirstOrDefaultAsync<Estado>(
                @$"SELECT * FROM {TBL_ESTADO.NAME} 
                    WHERE {TBL_ESTADO.NR_ID} = {Id}");
        }

        public async Task<IEnumerable<Estado>> ListAll(int? Id_pais){
            if(Id_pais != null
            && Id_pais > 0)
                return await Connection.QueryAsync<Estado>(
                    @$"SELECT * FROM {TBL_ESTADO.NAME} 
                        WHERE {TBL_ESTADO.NR_ID_PAIS} = {Id_pais}
                    ORDER BY {TBL_ESTADO.DS_NOME}");
            else
                return await Connection.QueryAsync<Estado>(
                    @$"SELECT * FROM {TBL_ESTADO.NAME} 
                    ORDER BY {TBL_ESTADO.DS_NOME}");
        }
    }

}
