using Microsoft.AspNetCore.Mvc;
using SIMP.Models;
using SIMP.Repositories;
using System;
using System.Threading.Tasks;

namespace SIMP.Controllers{

    [ApiController]
    [Route("Insert")]
    public class ThingIOTController : Controller{

        protected readonly IThingRepository thingRepository;

        public ThingIOTController(IThingRepository thingRepository){
            this.thingRepository = thingRepository;
        }

        // GET Insert?nome={nome}&temp={temp}&umid={umid}
        [HttpGet]
        public async Task<int> Get([FromQuery] string Nome, [FromQuery] float Temp, [FromQuery] float Umid){
            try{
                
                Thing Model = new Thing(){
                    Nome = Nome,
                    Temp = Temp,
                    Umid = Umid
                };
                await thingRepository.Insert(Model);
                return await thingRepository.GetAll(Nome);
            }catch (Exception){
                return 0;
            }
        }
    }
}
