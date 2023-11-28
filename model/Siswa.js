const mongoose = require ('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    },
    absen: {
        type: String,
        required: [true, 'Silahkan isikan absen'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas'],
        unique: false
    },

    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },

    nisn : {
        type: String,
        required: [true, 'Silahkan isikan nisn'],
        unique: false
    },
    alamat : {
        type: String,
        required: [true, 'Silahkan isikan alamat'],
        unique: false
    }

})

module.exports = mongoose.model('Siswa', SiswaSchema)
