import axios from 'axios';

class Api {
    static async getUserInfo(username) {

        try {
            const response = await axios.get('https://api.github.com/users/' + username);
            console.log('Usuario : ', response);
        } catch (error) {
            console.warn('Erro na aPI', error);
        }
    }    
}

Api.getUserInfo('ccesarc');
Api.getUserInfo('ccesarc1');