using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface ICursoRepository : ITableRepository<Curso>{
        public Task<Curso> GetById(int Id);

    }
}
