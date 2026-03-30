/* toggle nav menu */
const navLinks = document.querySelector('.nav-links');
const drop_down = document.querySelector('.drop-down');
const socialLinks = document.querySelector('.social-links');
drop_down.addEventListener('click', function() {
    if (navLinks.classList.contains('show-nav-links')) {
        navLinks.classList.toggle('show-nav-links');
        // socialLinks.classList.toggle('show-nav-links')
    } else if (!navLinks.classList.contains('show-nav-links')) {
        navLinks.classList.toggle('show-nav-links');
        // socialLinks.classList.toggle('show-nav-links')
    }
})

/* client testimonial functionlity */

const testimonials = [
    {
        id: 1,
        name: 'Jeff',
        title: 'Car Enthusiast',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-1.jpg',
    },
    {
        id: 2,
        name: 'Ashley',
        title: 'Developer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-2.jpg',
    },
    {
        id: 3,
        name: 'Amanda',
        title: 'Secretary',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-3.jpg',
    },
    {
        id: 4,
        name: 'John',
        title: 'Mechanic',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-4.jpg',},
    {
        id: 5,
        name: 'Tiffany',
        title: 'Traveler',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-6.jpg',
    },
    {
        id: 6,
        name: 'James',
        title: 'Electrician',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-5.jpg',
    },
    {
        id: 7,
        name: 'Claire',
        title: 'Photographer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-7.jpg',
    },
    {
        id: 8,
        name: 'Peter',
        title: 'Digital Marketer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-1.jpg',
    },
    {
        id: 9,
        name: 'Jaime',
        title: 'Wedding Planner',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-18.jpg',
    },
    {
        id: 10,
        name: 'Robert',
        title: 'Construction Manager',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-20.jpg',
    },
    {
        id: 11,
        name: 'Sophie',
        title: 'Logo Designer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-15.jpg',
    },
    {
        id: 12,
        name: 'Mathew',
        title: 'Interior Designer',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        image: '/images/person-22.jpg',
    },


];

function showTestimonials() {
    for (let i = 0; i < testimonials.length; i++) {
        testimonials = testimonials[i];
        if (testimonials < 0) {

        }
    }

}
