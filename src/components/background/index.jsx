import React from 'react';
import './style.css'
import Card from '../card'
import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export default function Background() {

    async function Init() {
        const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        console.log(profile)
    }

   Init()

    return (
        <div className='container'>
            <Card />
            <Card />
        </div>
    )
}