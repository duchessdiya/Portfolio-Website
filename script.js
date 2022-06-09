import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './style.css';
function Navbar()
{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClock = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleClock = () => setClick(!click);

}
$(document).on('click','.project-filter li', 
function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () => 
{
    modal_container.classList.add('show');
});

close.addEventListener('click', () => 
{
    modal_container.classList.remove('show');
});