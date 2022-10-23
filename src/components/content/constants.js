import eyes from './img/eyes.jpeg';
import happy from './img/happy.jpeg';
import mad from './img/mad.jpeg';
import sad from './img/sad.jpeg';
import smile from './img/smile.jpeg';

export const LIST = [
    { ask: 'Dun có ba lơn ko', yes: 'Đúng rồi đó', no: 'mọ cậu', img: smile, show: 0 },
    { ask: 'Mắt a có bị lỗi ko', yes: 'Vầy mà kêu lỗi', no: 'Khịa là giỏi', img: eyes, show: 0 },
    { ask: 'Thấy Dun nghiêm túc ko', yes: 'Họ khen miết', no: 'HUHU', img: happy, show: 1 },
    { ask: 'Dun có lấc cấc ko em', yes: 'Có mình e nói thôi', no: 'Cha của lấc cấc', img: mad, show: 1 },
    { ask: 'Em đang dỗi Dun phải hem', yes: 'Tha đi mà', no: 'Giận đi để vỗ về', img: sad, show: 0 }
]