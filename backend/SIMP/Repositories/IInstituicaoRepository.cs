using SIMP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface IInstituicaoRepository : ITableRepository<Instituicao>{
        public Task<IEnumerable<Instituicao>> GetAll(string Ds_ramo = "");
        public Task<Instituicao> GetById(int Id);
        public Task<Instituicao> GetByIdUser(int Id);
        public Task<Instituicao> GetByEmailPasswordUser(string Email, string Password);

    }
}
