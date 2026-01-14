// Image configuration - centralized image paths for easy management
// All images should be placed in the public folder

export const images = {
    // Logo
    logo: '/logo.png',

    // Hero section
    hero: 'https://placehold.co/1920x1080/2d2d2d/666666?text=Luxury+Kitchen+Image',

    // About section (What We Do)
    about: {
        kitchen: 'https://placehold.co/800x600/3a3a3a/888888?text=Kitchen+Renovation',
        bathroom: 'https://placehold.co/800x600/3a3a3a/888888?text=Bath+Renovation',
    },

    // Portfolio section (Our Work)
    portfolio: [
        { src: 'https://placehold.co/600x600/2d2d2d/777777?text=Kitchen+1', alt: 'Kitchen Project', category: 'Kitchen' },
        { src: 'https://placehold.co/600x600/3a3a3a/888888?text=Kitchen+2', alt: 'Kitchen Project', category: 'Kitchen' },
        { src: 'https://placehold.co/600x600/2d2d2d/777777?text=Bathroom+1', alt: 'Bathroom Project', category: 'Bathroom' },
        { src: 'https://placehold.co/600x600/3a3a3a/888888?text=Bathroom+2', alt: 'Bathroom Project', category: 'Bathroom' },
        { src: 'https://placehold.co/600x600/3a3a3a/888888?text=Kitchen+3', alt: 'Kitchen Project', category: 'Kitchen' },
        { src: 'https://placehold.co/600x600/2d2d2d/777777?text=Bathroom+3', alt: 'Bathroom Project', category: 'Bathroom' },
        { src: 'https://placehold.co/600x600/3a3a3a/888888?text=Bathroom+4', alt: 'Bathroom Project', category: 'Bathroom' },
        { src: 'https://placehold.co/600x600/2d2d2d/777777?text=Kitchen+4', alt: 'Kitchen Project', category: 'Kitchen' },
    ],
};

export default images;
