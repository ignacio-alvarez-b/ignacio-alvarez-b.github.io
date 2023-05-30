import { styledMap } from "./mapStyle.js";
import { json_instances } from "../data/instances.js";
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
let map;

//====================================================== Map ======================================================

// Initialize and add the map
let markers = [];
let current_lvl = 0;

async function initMap() {
	const position = { lat: 40, lng: -10 };
	const styledMapType = new google.maps.StyledMapType(styledMap);
	let map_div = document.getElementById("map");
	map = new Map(map_div, {
		zoom: 3,
		minZoom: 3,
		center: position,
		mapId: "Global_Architecture",
	});

	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");
	map_div.addEventListener("wheel", backTrack, true);
	map_div.addEventListener("DOMMouseScroll", backTrack, true);
	initializeMarkers(map, json_instances.instances);
}

function backTrack(event) {
	if (event.deltaY > 0) {
		event.stopPropagation();
		current_lvl = 0;
		map.setZoom(map.getZoom() - 3);
		updateView(json_instances.instances, map);
	}
}

//====================================================== Interactions ======================================================

function moveView(instance, zoom) {
	map.setCenter(instance.location);
	map.setZoom(zoom);
	updateView(instance.instances, map);
}

function updateView(instances, map) {
	markers.forEach((marker) => {
		marker.point.setMap(null);
	});
	markers = [];

	initializeMarkers(map, instances);
}

//====================================================== Markers ======================================================

function setMarker(instance, map) {
	const markerView = new google.maps.marker.AdvancedMarkerView({
		map,
		position: instance.location,
		content: buildContent(instance),
	});
	markerView.addEventListener("gmp-click", () => {
		if (current_lvl < 3) {
			current_lvl += 1;
			let zoom = map.getZoom() + 3;
			moveView(instance, zoom);
		} else {
			toggleModal();
		}
	});

	markers.push({ point: markerView, data: instance.instances });
}

function initializeMarkers(map, instances) {
	instances.forEach((instance) => {
		setMarker(instance, map);
	});
}

function getIcon(type) {
	switch (type) {
		case "GCP":
			return "../Assets/GCP.svg";

		case "AWS":
			return "../Assets/AWS.svg";

		case "Cluster":
			return "../Assets/TU.svg";

		default:
			break;
	}
}

function buildContent(instance) {
	const content = document.createElement("div");
	const iconPath = getIcon(instance.cloud);
	let online_indicator = "";
	let instance_information = "";
	content.classList.add("marker");
	if (current_lvl == 2) {
		online_indicator = instance.online
			? "<div class='online-badge online'></div>"
			: "<div class='online-badge offline'></div>";
	}
	if (current_lvl == 3) {
		instance_information = `
		<div class="info-container">
			<div class="info-column">
				<img class= "vector" src="../Assets/Cloud.svg" ></img>
				<p> <b>Instances</b> </p>
				<p>1340</p>
			</div>
			<div class="info-column">
				<img class= "vector" src="../Assets/Users.svg" ></img>
				<p> <b>Users</b> </p>
				<p>1340</p>
			</div>
			<div class="info-column">
				<img class= "vector" src="../Assets/Workspaces.svg" ></img>
				<p> <b>Workspaces</b> </p>
				<p>1340</p>
			</div>
			<div class="info-column">
				<img class= "vector" src="../Assets/Assets.svg"></img>
				<p> <b>Assets</b> </p>
				<p>1340</p>
			</div>
	</div>`;
	}
	content.innerHTML = `
	${online_indicator}
	<div class="svg-icon" >
		<img class="vector" src=${iconPath}></img>
	</div>
	<div class="hover-extension">
		<div class="extension-text">${instance.name}</div>
		${instance_information}
	</div>
`;
	return content;
}

function toggleModal() {
	document.getElementById("modal").classList.toggle("hide");
}

document.getElementById("background").addEventListener("click", toggleModal);
initMap();
