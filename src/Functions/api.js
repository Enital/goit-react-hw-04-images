import axios from 'axios'
const KEY = '35660997-4fd052661528ba3040eb8e5ad';

export async function api(query, page) {
    // const q = this.props.query;
    // console.log(query);
    // console.log(`https://pixabay.com/api/?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const { data } = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    // const data = await axios.get(`https://pixabay.com/api/?q=${this.state.query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    // return fetch(`https://pixabay.com/api/?q=${this.state.query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return data;
}