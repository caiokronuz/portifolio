import {AiOutlineCloseCircle} from 'react-icons/ai'

import styles from './modal.module.scss';

interface menuModalProps{
    handleMenuModal: () => void;
}

export function MenuModal(props: menuModalProps){
    return(
        <div className={styles.container} onClick={props.handleMenuModal}>
            <nav className={styles.menu}>
                <ul>
                    <li><AiOutlineCloseCircle/></li>
                    <li><a href="">Habilidades</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}