using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface ILogAcessoRepository : ITableRepository<LogAcesso>{
        public Task<bool> Insert(LogAcesso Model);

    }

}
