export type ProfileCopy = {
  portfolio: string;
  cv: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  portfolio: string;
  availability?: string;
  summary: ProfileCopy;
};

export const profile: Profile = {
  name: "Francisco Jesús Jalomo Chávez",
  role: "Frontend Engineer",
  location: "Tampico, Tamaulipas, México",
  email: "jalomo.chavez18@outlook.com",
  phone: "+52 833 203 2681",
  github: "https://github.com/voidexiled",
  linkedin: "https://www.linkedin.com/in/jesus-jalomo-chavez-1b1a0b219/",
  portfolio: "https://jesusjalomo.vercel.app",
  availability: "Disponible para trabajar",
  summary: {
    portfolio:
      "Frontend Engineer enfocado en TypeScript y React, con experiencia construyendo aplicaciones web y desktop completas, incluyendo productos utilizados por clientes reales. Interesado especialmente en desarrollo de producto, UI/UX y flujos modernos de desarrollo asistido por IA.",
    cv: "Frontend Engineer enfocado en TypeScript y React, con experiencia construyendo aplicaciones web y desktop completas, incluyendo productos comerciales utilizados por clientes reales.",
  },
};

export default profile;
