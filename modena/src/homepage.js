import { Content, ContentHydra, Design, DesignHydra, Scientific, ScientificHydra } from "./assets/img"

const solutionList = [
    {
        id: 0,
        name: 'Content Creation',
        desc: 'VFX, Rendering, Graphics, Video & Photo', 
        img: Content
    }, 
    {
        id: 1,
        name: 'Design & Engineering',
        desc: 'CAD/CAM, BIM, Simulation, Rendering', 
        img: Design
    }, 
    {
        id: 2,
        name: 'Scientific Computing',
        desc: 'Data Science, Machine Learning, AI, Scientific', 
        img: Scientific
    }, 

]

const softwareDefault = {
        industry:   null, // solutionList id -> 0: content creation
        logo:       '', 
        ram:        `The amount of memory you will need depends on how many programs you will have open at any given time alongside ${alias} and how large the files are that you will be working with. A good starting point in deciding how much RAM you should go for would be to check your current usage via Windows Task Manager.`, 
        ssd:        'In the past, computers were held back by slow mechanical hard drives.  Solid State drives should be used for the operating system and frequently accessed programs and files. Mechanical drives should only be used for extremely large files that are not used very often. Having everything stored on SSDs means you\’ll be able to copy, move, open and save files quickly and PC and program start times will be reduced.', 
        systems:    [1,1,0],
}

const contentSoftwareList = [
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe After Effects', 
        alias:      'After Effects',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Illustrator', 
        alias:      'Illustrator',
        logo:       '', 
        cpu:        'Adobe Illustrator relies entirely on CPU speed. Frequency is measured in “GHz”, and this is often listed in the specs. We would recommend opting for the fastest CPU possible. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Adobe Illustrator does not require a powerful graphics card, but certain features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming \– it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Incopy', 
        alias:      'Incopy',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Indesign', 
        alias:      'Indesign',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Lightroom', 
        alias:      'Lightroom',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Photoshop', 
        alias:      'Photoshop',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Premiere Pro', 
        alias:      'Premiere Pro',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram, 
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
]

const engineeringSoftwareList = [
    {
        industry:   1, // solutionList id -> 0: content creation
        name:       '', 
        alias:      '',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram,
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
]

const scientificSoftwareList = [
    {
        industry:   2, // solutionList id -> 0: content creation
        name:       '', 
        alias:      '',
        logo:       '', 
        cpu:        '',
        ram:        softwareDefault.ram,
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
]

export {solutionList}