import { Card } from './Card';
import '../styles/Carousel.css'

export const Carousel = () => {

    const arrayImg = [
        {
            'src': 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'name': 'Explore The World'
        },
        {
            'src': 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'name': 'Wild Forest'
        },
        {
            'src': 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'name': 'Explore The World'
        },
        {
            'src': 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'name': 'Explore The World'
        },
        {
            'src': 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'name': 'Explore The World'
        },
    ];

    return <div className='carousel'>
        {arrayImg.map(({src, name}, key) => {
            return <Card src={src} name={name} key={key}/>
        })}
    </div>
};