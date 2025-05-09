import styled from 'styled-components'

import Profile from './Profile'

const Logo = styled.div`
    color: #0C4242;
    font-weight: 900;
    font-size: 30px;
`

const IconImg = styled.img`
    width: 24px;
    height: 24px;
`

function Header(props){
    return(
        <header>
            <div className='header-container'>
                <div className='header-box'>
                    <nav>
                        <a href='#'><Logo>Tidy</Logo></a>
                        <ul>
                            <li><a className='nav' href='#'>neighbor</a></li>
                            <li><a className='nav' href='#'>myblog</a></li>
                            <li><a className='nav' href='#'>message</a></li>
                        </ul>
                    </nav>

                    <div className='header-icons'>
                        <a href='#'><IconImg src='/settings.png' /></a>
                        <a href='#'><IconImg src='/bell.png' /></a>
                        <a href='#'><Profile></Profile></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header