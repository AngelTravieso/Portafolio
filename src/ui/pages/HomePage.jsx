import { AppLayout } from "../layout/AppLayout";
import avatarImg from "../../assets/avatar.png";
import { Divider, ServiceCard, Section } from "../components";
import { services } from "../data";
import 'animate.css';


export const HomePage = () => {

    const serviceItems = services.map((service, idx) => 
        <ServiceCard key={ idx } info={service} />)


    return(
        <AppLayout>
            <div className="container mx-auto p-2">
                <div className="grid grid-cols-2 gap-2 place-items-center">
                    <div className="animate__animated animate__fadeIn mx-auto">
                        <img src={ avatarImg } alt="Avatar 3D" className="w-5/6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="text">
                            <p className="text-teal-500 font-medium text-3xl italic my-4">Hola soy</p>
                            <p className="text-white font-bold text-6xl my-4">Angel Travieso!</p>
                            <p className="text-white text-3xl font-medium my-6">Desarrollador de Software</p>

                            <p className="text-white text-lg my-10">Voluptate culpa veniam deserunt cupidatat aliqua ad voluptate aute veniam consequat enim eiusmod qui nulla.</p>

                            <div className="flex items-center justify-start row-buttons mt-8">
                                <button className="bg-transparent border border-teal-500 text-teal-500 font-medium text-xl rounded-full hover:text-white hover:bg-teal-500 py-3 px-8 transition ease-in-out duration-300">                                    
                                    Sobre mi
                                </button>
                                <p className="text-white font-medium text-xl mx-6">Sigueme: </p>

                                <div className="social-links flex">
                                    <a href="https://www.linkedin.com/in/angel-gustavo-travieso-castro" target="_blank">
                                        <div className="rounded-full border border-teal-500 hover:cursor-pointer text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-2 mx-1 transition ease-in-out duration-300">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </div>
                                    </a>
                                    <a href="https://github.com/AngelTravieso" target="_blank">
                                        <div className="rounded-full border border-teal-500 hover:cursor-pointer text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-2 mx-1 transition ease-in-out duration-300">
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Divider marginY={20} />

            {/* Servicios */}
            <Section 
                title="Servicios creativos"
                subtitle="Que puedo hacer por los clientes"
                description="Cupidatat nulla sunt veniam sit laboris officia labore do ex exercitation excepteur labore sit.">
                {serviceItems}
            </Section>

            <Divider marginY={20} />

            {/* Experiencia y Educación */}
            <Section 
                title="Experiencia y Educación"
                subtitle="Resumen"
                description="Cupidatat nulla sunt veniam sit laboris officia labore do ex exercitation excepteur labore sit.">
                
            </Section>

        </AppLayout>
    )
}