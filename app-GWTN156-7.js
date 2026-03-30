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
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I had a nasty dent on my car door, and the paint was badly scratched. I took it to Urban Auto Paint, and they did an amazing job! The dent is completely gone, and the paint job looks flawless. You can't even tell there was any damage in the first place. The service was quick, professional, and reasonably priced. Highly recommend!"`,
        image: 'images/person-1.jpg',
    },
    {
        id: 2,
        name: 'Ashley',
        title: 'Developer',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"Excellent service from start to finish. I had a significant dent on the rear bumper of my car, and after taking it to several places, Urban Auto Paint gave me the best quote. The work was done on time, and the paint matched perfectly. My car looks brand new again. The staff was friendly and kept me updated throughout the process. Five stars!"`,
        image: 'images/person-2.jpg',
    },
    {
        id: 3,
        name: 'Amanda',
        title: 'Secretary',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I recently had a minor accident that left my car with a couple of dents and scratches. A friend recommended Urban Auto Paint, and I'm so glad I went there. They removed all the dents and matched the paint perfectly to the rest of the car. It looks like nothing ever happened! The team was very professional and completed the job quicker than I expected. I couldn't be happier with the results."`,
        image: 'images/person-3.jpg',
    },
    {
        id: 4,
        name: 'John',
        title: 'Mechanic',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"After someone hit my parked car and left a dent, I was worried about the cost and how long it would take to fix. But Urban Auto Paint made the process so easy and stress-free. The team explained everything clearly and gave me a fair price. The dent was removed, and the paint job was done flawlessly. The quality of their work exceeded my expectations. Highly recommend their services to anyone!"`,
        image: 'images/person-4.jpg',
    },
    {
        id: 5,
        name: 'Tiffany',
        title: 'Traveler',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I took my car to Urban Auto Paint after getting several quotes, and I am so happy I chose them. Not only did they do a fantastic job fixing the dent and repainting my car, but they also finished the work earlier than promised. The paint match is perfect, and the car looks as good as new. The staff was friendly and helpful throughout the process. I will definitely come back if I need more work done in the future."`,
        image: 'images/person-6.jpg',
    },
    {
        id: 6,
        name: 'James',
        title: 'Electrician',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I recently took my car to this shop for dent repair and a new paint job, and I am beyond impressed with the results. From the moment I walked in, the staff was professional and courteous. They explained the entire process in detail and gave me a fair estimate. The team worked efficiently, and my car looks brand new again! The dents are completely gone, and the paint matches perfectly with the original color. I couldn't have asked for better service. Highly recommended!"`,
        image: 'images/person-5.jpg',
    },
    {
        id: 7,
        name: 'Claire',
        title: 'Photographer',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I was worried about getting my car's dent and paint fixed because I wanted it to look as good as new. This company exceeded my expectations in every way. The attention to detail was outstanding; you can't even tell there was any damage in the first place. The paint job was flawless, and they even took care of a few minor scratches without charging extra. It's rare to find such dedication to quality these days. I'll definitely be returning for any future needs!"`,
        image: 'images/person-7.jpg',
    },
    {
        id: 8,
        name: 'Peter',
        title: 'Digital Marketer',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I was in a bind after a minor accident left a nasty dent and some scratches on my car. I needed the repairs done quickly because of an upcoming road trip. The team at this shop understood my urgency and delivered exceptional work in a short period. The dent repair and paint job were completed within a couple of days, and the results were fantastic. The car looks as good as it did before the accident, and I didn't have to postpone my plans. Thank you for the quick and efficient service!"`,
        image: 'images/person-23.jpg',
    },
    {
        id: 9,
        name: 'Jaime',
        title: 'Wedding Planner',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"After shopping around for quotes from different repair shops, I chose this one because of their competitive pricing and great reviews. I wasn't disappointed! The quality of work they provided for the price was incredible. The dent removal was done flawlessly, and the new paint job blends seamlessly with the rest of the car. It's clear that they use high-quality materials and employ skilled technicians. I got excellent value for my money, and I will definitely recommend them to friends and family."`,
        image: 'images/person-18.jpg',
    },
    {
        id: 10,
        name: 'Robert',
        title: 'Construction Manager',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"What I appreciated most about my experience here was the transparency and friendliness of the staff. They kept me informed at every stage of the dent repair and painting process, explaining what they were doing and why. There were no hidden costs or surprises when I received my final bill. The car looks fantastic, and the experience was stress-free from start to finish. It's nice to know there are still honest businesses out there that care about their customers."`,
        image: 'images/person-20.jpg',
    },
    {
        id: 11,
        name: 'Sophie',
        title: 'Logo Designer',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"The customer service I received from this company was top-notch. They not only did a fantastic job on my car's dents and paint but also followed up a few days later to ensure I was satisfied with the work. This level of care and commitment to customer satisfaction is rare. The car looks absolutely stunning, and I feel confident knowing that they stand behind their work. I will definitely be a returning customer."`,
        image: 'images/person-15.jpeg',
    },
    {
        id: 12,
        name: 'Mathew',
        title: 'Interior Designer',
        // description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga laborum sint debitis quasi, eveniet ad vero nemo, dolor quis velit provident at eos iusto autem reiciendis! Asperiores, dicta sit.',
        description: `"I had a deep dent and some paint damage after a minor fender-bender, and I was worried about finding a reliable repair shop. A friend recommended this place, and I'm so glad they did. The team was professional and trustworthy right from the start. They gave me a detailed quote and explained the entire repair process, so I knew exactly what to expect. The end result was fantastic — my car looks as good as new. I'm relieved to have found a place I can trust for quality repairs and excellent service."`,
        image: 'images/person-22.png',
    },


];

// const author = document.querySelector('.client-name');
const name = document.querySelector('.client-name');
const description = document.querySelector('.client-testimonial-paragraph');
const title = document.querySelector('.job');
const image = document.querySelector('.person-img');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const contentArea = document.querySelector('.client-testimonial-content');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
showTestimonials(currentItem);

});

function showTestimonials(person) {
    // for (let i = 0; i < testimonials.length; i++) {
    //     testimonials = testimonials[i];
    //     if (testimonials < 0) {

    //     }
    // }

    const item = testimonials[person];
    image.src = item.image;
    name.textContent = item.name;
    title.textContent = item.title;
    description.textContent = item.description;
    // console.log(item);

}


nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > testimonials.length - 1) {
        currentItem = 0;
    }
    showTestimonials(currentItem)
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    // if (currentItem < testimonials.length + 1) {
    //     currentItem--;
    // }
if (currentItem < 0) {
    currentItem = testimonials.length - 1;
}

    // console.log(testimonials.length - 1)
    showTestimonials(currentItem)
})
// i = 1;
// function next() {
//     for (let i = 0; i < testimonials.length; i++ ) {
//         if (i < testimonials.length) {
//             //    contentArea.innerHTML = testimonials[i]; 
//         } else {
//             // contentArea.innerHTML = testimonials[i];
//         }
//     }
//     setTimeout(next, 2000)
// }

// let slideShow = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName('client-testimonial-content');
//     // let slides = testimonials;
//     for (i = 0; i < testimonials.length; i++) {
//         // slides[i].style.display = 'none';
//         console.log(testimonials[i]);
//         slides[i].style.display = 'none';
//     }

// slideShow++;

// if (slideShow > testimonials.length) {
//     slideShow = 1;
// }
// slides[slideShow-1].style.display = 'block';
// setTimeout(showSlides, 2000);
// }

// next();
 var i = 0;
 const slides = document.querySelector('.slides');
function next() {
//     for (i = 1; i < testimonials.length; i++) {
//     if (i < testimonials.length) {
//         slides.innerHTML = testimonials[i];
//         i++;
//         // console.log(contentArea.innerHTML = testimonials[i]);
//         // console.log(contentArea);
//         console.log(testimonials[i]);
// }
    
currentItem++;
    if (currentItem > testimonials.length - 1) {
        currentItem = 0;
    } 
    showTestimonials(currentItem)
    
// else {
//     i = 0;
//     // contentArea.innerHTML = testimonials[i];
//     slides.innerHTML = testimonials[i];
// }
//     }
setTimeout(next, 3000)

}
// next();


// function next() {
//     currentItem++;
//     if (currentItem > testimonials.length - 1) {
//         currentItem = 0;
//     }
//     showTestimonials(currentItem)
//     setTimeout(next, 3000)
// }
// i = 0;
// x = document.querySelector('.client-testimonial-content');

// function next() {
//     if (i >= 0) {
//             x.innerHTML = testimonials[i];
//             i++;
//           } else {
//             i = newsArr.length - 1;
//             x.innerHTML = testimonials[i];
//           }
// }

// function next2() {
//     for (let i = 0; i < testimonials.length; i++) {

//         // const reviews = testimonials[i];
//         if (currentItem < testimonials.length - 1) {
//             console.log(testimonials[i])
//             currentItem = 0;
//             // showTestimonials(currentItem)
//             // // showTestimonials()
//             // contentArea.innerHTML = testimonials[i];
//         }
//     }
// }
// next2();

// function prev() {
//   if (i >= 0) {
//     x.innerHTML = testimonials[i];
//     i--;
//   } else {
//     i = newsArr.length - 1;
//     x.innerHTML = testimonials[i];
//   }
// }
// prev();


// let i = 1;
// setInterval(() => {
//     Array.from(testimonials).forEach((item, index) => {
//         if (i < testimonials.length) {
//             item.style.transform = `translateX(-${i * 100}%)`;
//         }
//     });
//     if (i < testimonials.length) {
//         i++;
//     } else {
//         i = 0;
//     }
// }, 2000)








// function next3() {
//     currentItem++;
//     if (currentItem > testimonials.length - 1) {
//         currentItem = 0;
//     }
//     showTestimonials(currentItem)
//     // setTimeout(next3, 2000)
//     // showPerson(currentItem);
//     // else {
//     //     // console.log('Hello');
//     //     currentItem = testimonials.length - 1;
//     // }
// }
// setTimeout(next3, 2000)


// this function is important to review slider functionality
function next3() {
    currentItem++;
    //no need to loop over testimonials array// but its there anyway
    for (let i = 0; i < testimonials.length; i++) {
    //     let reviews = testimonials[i];
    if (currentItem > testimonials.length - 1) {
        currentItem = 0;
        // currentItem = testimonials.length - 1;
        // showTestimonials(currentItem)
    } 
    // else {
    //     currentItem = testimonials.length - 1;
    //     // currentItem = 0;
    // }
    showTestimonials(currentItem)
    // setTimeout(next3, 2000)
    // showPerson(currentItem);
    // else {
    //     // console.log('Hello');
    //     currentItem = testimonials.length - 1;
    // }
}
setTimeout(next3, 2000)
}
//Uncomment to use reviews slide functionality
// setTimeout(next3, 2000)

function next4() {
    currentItem++
    if (currentItem >= testimonials.length) {
        currentItem = 0;
    }
    showTestimonials(currentItem);
    setTimeout(next4, 2000);
}
// setTimeout(next4, 2000);
