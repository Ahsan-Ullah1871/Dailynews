import React from "react";
import { Dropdown } from "react-bootstrap";
import DrawerHeader from "../DrawerHeader/DrawerHeader";

const Header = () => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const today = new Date();

	return (
		<div className="container-fluid">
			<div className="row  p-4">
				<div className="col-4">
					<DrawerHeader></DrawerHeader>{" "}
					{today.toLocaleDateString("bd", options)}
				</div>
				<div className="col-4 text-center">
					<h1>The Daily News</h1>{" "}
				</div>
				<div className="col-4 text-center">
					<Dropdown>
						<Dropdown.Toggle
							variant="success"
							id="dropdown-basic"
						>
							Language
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">
								Bangla
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">
								English
							</Dropdown.Item>
							<Dropdown.Item href="#/action-3">
								Arbi
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default Header;
