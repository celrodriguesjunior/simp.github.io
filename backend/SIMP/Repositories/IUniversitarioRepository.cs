using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface IUniversitarioRepository : ITableRepository<Universitario>{
        public Task<Universitario> GetById(int Id);
        public Task<Universitario> GetByIdUser(int Id);
        public Task<Universitario> GetByEmailPasswordUser(string Email, string Password);
    }
}
