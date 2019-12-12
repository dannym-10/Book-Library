import facebook from './Assets/facebook.svg';
import twitter from './Assets/twitter.svg';
import instagram from './Assets/instagram.svg';

//The class below contains two arrays, one for the navigation and one for the social icons. 
//This is one centeralised place to read the data from and if anything needs updating, it is in one file
class NavigationStore {
    navigation = [
        {
            displayName: 'Home',
            url: '/',
        },
        {
            displayName: 'Books',
            url: 'books',
        },
        {
            displayName: 'Magazines',
            url: 'magazines',
        },
        {
            displayName: 'E-Books',
            url: 'e-books',
        },
        {
            displayName: 'Account',
            url: 'account',
        },
    ]
    social = [
        {
            name: 'Twitter',
            image: twitter,
            url: 'www.twitter.com/',
        },
        {
            name: 'Facebook',
            image: facebook,
            url: 'www.facebook.com',
        },
        {
            name: 'Instagram',
            image: instagram,
            url: 'www.instagram.com',
        }
    ]
}

const store = new NavigationStore();
export default store;