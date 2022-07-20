import { Content, ContentHydra, Design, DesignHydra, Scientific, ScientificHydra } from "./assets/img"
import { NoImage } from "./assets/img"
import { Illustrator, Incopy, Indesign, Lightroom, Photoshop } from "./assets/img"

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
        logo:       NoImage, 
        ram:        `The amount of memory you will need depends on how many programs you will have open at any given time alongside ${alias} and how large the files are that you will be working with. A good starting point in deciding how much RAM you should go for would be to check your current usage via Windows Task Manager.`, 
        ssd:        'In the past, computers were held back by slow mechanical hard drives.  Solid State drives should be used for the operating system and frequently accessed programs and files. Mechanical drives should only be used for extremely large files that are not used very often. Having everything stored on SSDs means you\’ll be able to copy, move, open and save files quickly and PC and program start times will be reduced.', 
        systems:    [1,1,0],
}

const contentSoftwareList = [
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe After Effects', 
        alias:      'After Effects',
        logo:       NoImage, 
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
        logo:       Illustrator, 
        cpu:        'Adobe Illustrator relies entirely on CPU speed. Frequency is measured in “GHz”, and this is often listed in the specs. We would recommend opting for the fastest CPU possible. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Adobe Illustrator does not require a powerful graphics card, but certain features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming – it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Incopy', 
        alias:      'Incopy',
        logo:       Incopy, 
        cpu:        'Adobe Incopy relies primarily on CPU speed, but it doesn\’t require an especially powerful CPU. Frequency is measured in “GHz”, and this is often listed in the specs. We would recommend opting for the fastest CPU within your budget. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Adobe Incopy does not require a powerful graphics card, but some features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming – it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Indesign', 
        alias:      'Indesign',
        logo:       Indesign, 
        cpu:        'Adobe Indesign relies primarily on CPU speed, but it doesn\’t require an especially powerful CPU. Frequency is measured in “GHz”, and this is often listed in the specs. We would recommend opting for the fastest CPU within your budget. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Adobe Indesign does not require a powerful graphics card, but some features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming – it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Lightroom', 
        alias:      'Lightroom',
        logo:       Lightroom, 
        cpu:        'Adobe Lightroom relies mostly on CPU speed (GHz), but many processes in Photoshop take advantage of multiple CPU cores up to a certain point. These processes include applying blur effects and adjusting colour and contrast. We would recommend opting for the fastest CPU possible that still has a reasonable core count. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Lightroom does not require a powerful graphics card, but certain features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming – it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Photoshop', 
        alias:      'Photoshop',
        logo:       Photoshop, 
        cpu:        'Adobe Photoshop relies mostly on CPU speed (GHz), but many processes in Photoshop take advantage of multiple CPU cores up to a certain point. These processes include applying blur effects and adjusting colour and contrast. We would recommend opting for the fastest CPU possible that still has a reasonable core count. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Photoshop does not require a powerful graphics card, but certain features can make use of GPU power to a certain extent. A dedicated GPU provides a much smoother experience when panning and zooming – it also lets you zoom in much closer. A mid-range card would offer the best value. As always, you should keep in mind other software you use that could rely more on GPU power. \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for optimal performance, stability and value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
    {
        industry:   0, // solutionList id -> 0: content creation
        name:       'Adobe Premiere Pro', 
        alias:      'Premiere Pro',
        logo:       NoImage, 
        cpu:        'Adobe Premiere Pro can make use of multiple CPU cores, but the efficiency greatly drops after a certain point. For most users, we would recommend opting for the fastest CPU available that still has a decent core count. Not all user workflows are the same though, so be sure and contact us for an optimized configuration.',
        ram:        softwareDefault.ram, 
        gpu:        'Your graphics card can make a big difference for Premiere Pro. A mid-range card will be suitable for 1080p editing, but you\’ll want something with more VRAM for editing at higher resolutions. Exporting to H.264 also requires more GPU power. \nWhile Premiere Pro does support multiple GPUs, this feature does not improve performance over a single card by much.  \nAdobe does not require a workstation grade GPU (Nvidia Quadro or AMD Radeon Pro), and we would recommend a Nvidia GeForce card for the greatest value.', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
]

const engineeringSoftwareList = [
    {
        industry:   1, // solutionList id -> 0: content creation
        name:       '', 
        alias:      '',
        logo:       NoImage, 
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
        logo:       NoImage, 
        cpu:        '',
        ram:        softwareDefault.ram,
        gpu:        '', 
        ssd:        softwareDefault.ssd, 
        systems:    softwareDefault.systems,
    },
]

export {solutionList, contentSoftwareList, engineeringSoftwareList, scientificSoftwareList}