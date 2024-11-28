// Function to add rows to the table
const audioSources = [
    'mixture.wav',
    'target.wav',
    'spex_plus.wav',
    'tselm_l.wav',
    'tselm_l_hybrid.wav',
    'continuous_wavlm_l6.wav',
    'reference.wav',
];

const tse_sources = [
    'mixture.wav',
    'target.wav',
    'output.wav',
    'reference.wav',
];


function addRows(name, order, audioSources) {
    const tableBody = document.querySelector(`#${name} tbody`);

    const audio_path = `assets/demo/${name}`
    
    // Number of rows to add
    const numberOfRows = order.length;
    
    // Number of audio elements per row
    const audiosPerRow = audioSources.length;

    // Add rows
    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement('tr');
        const base_path = audio_path + "/" + (order[i]) +"/"
        for (let j = 0; j < audiosPerRow; j++) {
            const cell = document.createElement('td');
            const audio = document.createElement('audio');
            audio.controls = true;
            
            audio.src = base_path +  audioSources[j % audioSources.length]; // Loop through audio sources
            cell.appendChild(audio);
            row.appendChild(cell);
        }
        
        tableBody.appendChild(row);
    }
}

const libri2mix = "libri2mix-audio-table"
var order = [1, 2, 3, 4, 5, 6, 7]
addRows(libri2mix, order, audioSources);

const tse = "libri2mix_mix_clean"
order = [1, 2, 3, 4]
addRows(tse, order, tse_sources);
