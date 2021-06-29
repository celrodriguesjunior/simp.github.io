using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SIMP.Repositories;
using SIMP.Services.Oracle;

namespace Simp{
    
    public class Startup{
        
        public Startup(IConfiguration configuration){
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services){

            services.AddSingleton<IUsuarioRepository              , UsuarioRepositoryOracle>();
            services.AddSingleton<IUniversitarioRepository        , UniversitarioRepositoryOracle>();
            services.AddSingleton<IInstituicaoRepository          , InstituicaoRepositoryOracle>();
            services.AddSingleton<ICursoRepository                , CursoRepositoryOracle>();
            services.AddSingleton<IPropostaRepository             , PropostaRepositoryOracle>();
            services.AddSingleton<ILogAcessoRepository            , LogAcessoRepositoryOracle>();
            services.AddSingleton<IPropostaUniversitarioRepository, PropostaUniversitarioRepositoryOracle>();
            services.AddSingleton<IPaisRepository                 , PaisRepositoryOracle>();
            services.AddSingleton<IEstadoRepository               , EstadoRepositoryOracle>();
            services.AddSingleton<ICidadeRepository               , CidadeRepositoryOracle>();
            services.AddSingleton<IArquivoRepository              , ArquivoRepositoryOracle>();
            services.AddSingleton<IAcessosPropostaRepository      , AcessosPropostaRepositoryOracle>();
            services.AddSingleton<IAgrupadorArquivoRepository     , AgrupadorArquivoRepositoryOracle>();
            services.AddSingleton<IInteresseRepository            , InteresseRepositoryOracle>();
            services.AddSingleton<IServidorEmailRepository        , ServidorEmailRepositoryOracle>();
            services.AddSingleton<IEmailSender                    , EmailSenderOracle>();
            services.AddSingleton<ITokenRepository                , TokenRepositoryOracle>();

            // Miguel
            services.AddSingleton<IThingRepository                , ThingRepositoryOracle>();
            services.AddSingleton<IDragRaceRepository             , DragRaceRepositoryOracle>();

            services.AddControllers();

            services.AddCors(options =>{
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env){
            
            if (env.IsDevelopment()){
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>{
                endpoints.MapControllers();
            });
        }
    }
}
