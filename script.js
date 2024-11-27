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

function addRows(name, order) {
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
addRows(libri2mix, order);

const wsj0_2mix = "wsj0-2mix"
order = [1, 2, 3, 4, 5, 6, 7]
addRows(wsj0_2mix, order);
