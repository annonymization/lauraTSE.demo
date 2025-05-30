// Function to add rows to the table
// const se_sources = [
//     'mixture.wav',
//     'clean.wav',
//     'output.wav'
// ];
const tse_sources = [
    'mixture.wav',
    'target.wav',
    'output.wav',
    'reference.wav',
];

const tse_compare_sources = [
    'mixture.wav',
    // 'target.wav',
    'laura_tse.wav',
    'tselm_l.wav',
    'spex_plus.wav',
    // 'reference.wav',
    'target.wav',
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

const libri2mix = "libri2mix_mix_clean"
var order = [1, 2, 3, 4, 5, 6, 7, 8, 9]
addRows(libri2mix, order, tse_sources);

const tse = "libri2mix_mix_clean_compare"
order = [1, 2, 3, 6]
addRows(tse, order, tse_compare_sources);
