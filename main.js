const bannedWords = ['anti-bacterial',
    'anti-fungal',
    'anti-microbial',
    'antibacterial',
    'antifungal',
    'antimicrobial',
    'bacteria',
    'fungus',
    'hypoallergenic',
    'hypo allergenic',
    'hypo-allergenic',
    'mildew',
    'mold',
    'mold resistant',
    'mold spores',
    'sanitize',
    'sanitizes',
    'virus',
    'viruses',
    'pesticides',
    'pesticide',
    'fungicides',
    'fungicide',
    'fungal',
    'Nano silver',
    'Anti-Bacterial',
    'Anti-Microbial',
    'Anti-Fungal',
    'contaminants',
    'germ',
    'microbes',
    'microbe',
    'BPA',
    'germs',
    'Insect repellent',
    'bug repellent',
    'mosquito repellent',
    'Sanitary',
    'sanitation',
    'sanitization',
    'microbe',
    'microbial',
    'bacteria',
    'bacterial',
    'fungal',
    'fungus',
    'germ',
    'pest',
    'insect',
    'repel',
    'virus',
    'disinfect',
    'repel',
    'remove',
    'allergy',
    'allergen',
    'mold',
    'mildew',
    'rodent',
    'weed',
    'trap',
    'destroy',
    'mitigate',
    'capture',
    'kill',
    'sterilize',
    'sanitize',
    'disinfect',
    'allergens',
    'allergies',
    'repellent',
    'cancer',
    'cure',
    'fda',
    'heal',
    'treat',
    'covid',
    'coronavirus',
    'corona',
    'corona virus',
    'detox',
    'detoxify',
    'detoxifying',
    'detoxification',
    'weight loss',
    'treatment',
    'disease',
    'toxin',
    'toxins',
    'viral',
    'parasitic',
    'remedy',
    'remedies',
    'diseases',
    'Cancer',
    'Cancroid',
    'Chlamydia',
    'Coronavirus',
    'COVID-19',
    'Cytomegalovirus',
    'CMV',
    'Human Papilloma Virus',
    'HPV',
    'Gonorrhea',
    'The Clap',
    'Hepatitis A',
    'Hepatitis B',
    'Hepatitis C',
    'Herpes',
    'Herpes Simplex Virus 1',
    'Herpes Simplex Virus 2',
    'HSV1',
    'HSV2',
    'Human Immunodeficiency Virus',
    'HIV',
    'AIDS',
    'Acquired Immune Deficiency Syndrome',
    'Lymphogranuloma Venereum',
    'LGV',
    'Mononucleosis',
    'Mono',
    'Mycoplasma Genitalium',
    'Nongonococcal Urethritis',
    'NGU',
    'Pelvic Inflammatory Disease',
    'PID',
    'Pubic Lice',
    'Crabs',
    'Scabies',
    'Syphilis',
    'Trichomoniasis',
    'Trich',
    'Liver',
    'Liver disease',
    'Multiple sclerosis',
    'Kidney cirrhosis',
    'Kidney disease',
    'Alzheimer’s disease',
    'Alzheimer’s',
    'Dementia',
    'Stroke',
    'Parkinson’s',
    'Parkinson',
    'Diabetes',
    'Diabetic',
    'Diabetic Neuropathy',
    'Flu',
    'Influenza',
    'Meningitis',
    'Glaucoma',
    'Cataract',
    'Attention Deficit Disorder Drugs',
    'ADD',
    'ADHD',
    'Concussion',
    'Traumatic brain injuries',
    'TBIs',
    'Tumor',
    'Seasonal Affective Disorder',
    'SAD',
    'Depression',
    'Cystic Fibrosis',
    'Hodgkin’s Lymphoma',
    'Lymphoma',
    'Lupus',
    'Muscular Dystrophy',
    'Multiple Sclerosis',
    'ALS',
    'Amyotrophic lateral sclerosis',
    'Lou Gehrig\'s disease',
    'Gout',
    'Crohn’s',
    'Celiac',
    'Epilepsy',
    'Seizures',
    'Obesity',
    'Autism',
    'Addictive substance withdrawal',
    'medicine',
    'illness',
    'ailment',
    'malady',
    'maladies',
    'cold',
    'drugs',
    'drug',
    'healthy',
    'healthier',
    'asthma',
    'allergies',
    'antiviral',
    'pathogen',
    'pathogens',
    'Mites',
    'infection',
    'allergen',
    'COVID',
    'Hemp',
    'Headaches',
    'Migraines',
    'FDA Approved',
    'autistic',
    'anxiety',
    'allergy',
    'healing',
    'viral',
    'clinically',
    'vaccine',
    'eco friendly',
    'environmentally friendly',
    'guarantee',
    'marine degradable',
    'pearl',
    'platinum',
    'proven',
    'recommended by',
    'tested',
    'toxic',
    'validated',
    'validated',
    'price',
    'refund',
    'all-natural',
    'best seller',
    '$',
    'bonus',
    'patented',
    'award-winning',
    'Essential oil',
    'Alcohol',
    'high-quality',
    'high quality',
    'premium',
    'toxic',
    'prevent',
    'anti',
    'stop',
    'scientifically',
    'certified',
    'deterioration',
    'makes perfect',
    'makes spectacular',
    'makes the best',
    'makes wonderful',
    'massive sale',
    'money back guarantee',
    'newest version',
    'now together',
    'On sale',
    'over- stock',
    'overstock',
    'Perfect for',
    'Perfect gift',
    'plus free',
    'Professional quality',
    'Ready to ship',
    'Retail box',
    'Satisfaction',
    'Save $',
    'Save cash',
    'Save money',
    'seen on tv',
    'Ships faster',
    'shop with confidence',
    'Special offer',
    'Special promo',
    'spring sale',
    'summer sale',
    'super sale',
    'supplies won\'t last',
    'Top notch',
    'top quality',
    'top rated',
    'top selling',
    'unbeatable price',
    'UPS',
    'Used',
    'wholesale price',
    'winter sale',
    'Within hours',
    'worlds best',
    '% off',
    'added value',
    'Arrive faster',
    'Authentic',
    'award winning',
    'bakes great',
    'best deal',
    'Best price',
    'Best seller',
    'Best selling',
    'big sale',
    'bpa free',
    'brand new',
    'buy now',
    'Buy now',
    'buy with confidence',
    'close- out',
    'close-out',
    'closeout',
    'Discounted price',
    'don\'t miss out',
    'etc.',
    'fall sale',
    'FedEx',
    'free gift',
    'free shipping',
    'gift idea',
    'Great as',
    'Great for',
    'great for BBQ',
    'Guaranteed',
    'Hassle free',
    'healthy meals',
    'highest rated',
    'huge sale',
    'imported from',
    'Lasting quality',
    'limited time offer',
    'Made in',
    'mail rebate',
    'make excellent',
    'makes awesome',
    'makes great'
];
document.addEventListener('DOMContentLoaded', () => {
    let checkButton = document.querySelector('.check__btn');
    let inputText = document.querySelector('.content__area');
    let outputText = document.querySelector('.output__text');

    checkButton.addEventListener('click', (e) => {
        e.preventDefault();
        outputText.innerHTML = '';
        let innerTextContent = inputText.innerText;

        bannedWords.forEach(word => {
            innerTextContent = innerTextContent.replaceAll(`${word.toLowerCase()}`, `<span class="mark">${word.toLowerCase()}</span>`);
        });
        let innerTextBreaks = innerTextContent.split("\n\n");

        inputText.innerText = '';
        innerTextBreaks.forEach(paragraph => {
            outputText.innerHTML += `${paragraph}`;
            outputText.innerHTML += `<br>`;
        })
    });
});