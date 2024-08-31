import React from 'react';
import Team from '@/components/Team';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TeamPage = () => {
    return (
        <>
        <Header title="Our Team" subtitle="Meet the people behind Turing Club" />
        <div className="py-12">
        <Team/>
        </div>
        <Footer />
        </>
    );
};

export default TeamPage
