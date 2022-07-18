import { NextPage } from "next";
import {GiHamburgerMenu} from 'react-icons/gi'

import styles from './navigation.module.scss';

interface navigationProps{
    handleMenuModal: () => void;
    isMenuModalOpen: boolean;
}

export function NavigationBar({handleMenuModal, isMenuModalOpen}: navigationProps){
    return(
        <header className={styles.navigation}>
            <div className={styles.logo}>
                <h1>Caio Gabriel</h1>
                {isMenuModalOpen ? <></> : <GiHamburgerMenu onClick={handleMenuModal}/>}
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="">Habilidades</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
