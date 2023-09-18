export class Constants {
    static readonly appLogo = '/assets/img/logo.png';
    static readonly profileImage = '/assets/img/profile-img.png';
    static readonly bannerImage = '/assets/img/banner-home.png';

  static readonly baseUrl='https://localhost:44319';
 //static readonly baseUrl='http://20.68.215.183:9095';

  }
  export function setCookie(cname:any, cvalue:any, exdays:any) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  

  