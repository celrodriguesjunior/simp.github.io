using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface IServidorEmailRepository : ITableRepository<ServidorEmail>{
        public Task<ServidorEmail> GetById(int Id);
        public Task<ServidorEmail> GetByName(string Nome);

    }
}
