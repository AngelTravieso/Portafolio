import { AppLayout } from "../layout/AppLayout";
import avatarImg from "../../assets/avatar.png";

export const HomePage = () => {

    return(
        <AppLayout>
            <div className="grid grid-cols-2 gap-2 p-2 h-5/6 place-items-center">
                <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-2 font-bold font-mono text-4xl text-dark-grey md:text-6xl">
                    Hola, soy <span className="relative">
                        <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent text-transparent bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text">
                        Angel
                        </span> <span className="text-3xl md:text-5xl">👋</span>
                        <span
                        className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-slate-50 w-full animate-type will-change`}"
                        ></span>
                    </span>
                    </h2>
                </div>
                <div className="flex justify-center items-center">
                        <svg className="absolute h-5/6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                         <path fill="#1E3050" d="M27.5,-28.9C38.1,-16.9,50.8,-8.5,54.5,3.7C58.2,15.8,52.8,31.6,42.2,44C31.6,56.5,15.8,65.5,-1,66.5C-17.9,67.5,-35.7,60.6,-42.9,48.2C-50.1,35.7,-46.6,17.9,-47.8,-1.3C-49.1,-20.4,-55.1,-40.8,-48,-52.7C-40.8,-64.7,-20.4,-68.2,-6,-62.2C8.5,-56.2,16.9,-40.8,27.5,-28.9Z" transform="translate(100 100)" />
                        </svg>

                    <img src={ avatarImg } className="h-4/6 absolute " alt="Avatar 3D Angel" />

                </div>
            </div>
        </AppLayout>
    )

}