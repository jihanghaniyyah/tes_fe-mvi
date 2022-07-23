import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FaNewspaper, FaHome, FaUserAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<ProSidebar>
			<SidebarContent>
				<Menu iconShape='circle'>
					<MenuItem icon={<FaHome />}>
						Home <Link to='/' />
					</MenuItem>
					<MenuItem icon={<FaUserAlt />}>
						User <Link to='/user' />
					</MenuItem>
					<MenuItem icon={<FaNewspaper />}>
						Post <Link to='/post' />
					</MenuItem>
				</Menu>
			</SidebarContent>
			<SidebarFooter style={{ textAlign: 'center' }}>
				<div className='sidebar-btn-wrapper'>
					<a
						href='https://www.github.com'
						target='_blank'
						className='sidebar-btn'
						rel='noopener noreferrer'
					>
						<FaGithub />
						<span>Github</span>
					</a>
				</div>
			</SidebarFooter>
		</ProSidebar>
	);
}
