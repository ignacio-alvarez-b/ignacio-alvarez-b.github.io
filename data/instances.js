export const json_instances = {
	instances: [
		{
			name: "NA - East Instances",
			location: { lat: 42.363892, lng: -71.056795 },
			cloud: "Cluster",
			instances: [
				{
					name: "Non Production",
					location: { lat: 42.363892, lng: -71.056795 },
					cloud: "GCP",
					instances: [
						{
							name: "Credit",
							location: { lat: 42.763892, lng: -71.156795 },
							cloud: "GCP",
							online: true,
							instances: [
								{
									name: "Fdev",
									cloud: "GCP",
									location: {
										lat: 42.763892,
										lng: -71.156795,
									},
									instances: [],
								},
								{
									name: "Cleanroom",
									cloud: "GCP",
									location: {
										lat: 42.863892,
										lng: -71.146795,
									},
									instances: [],
								},
							],
						},
						{
							name: "Non - Credit",
							location: { lat: 42.363892, lng: -71.056795 },
							cloud: "GCP",
							online: false,
							instances: [
								{
									name: "Fdev2",
									cloud: "GCP",
									location: {
										lat: 42.358224,
										lng: -71.067581,
									},
									instances: [],
								},
								{
									name: "Cleanroom2",
									cloud: "GCP",
									location: {
										lat: 42.362025,
										lng: -71.104008,
									},
									instances: [],
								},
							],
						},
					],
				},
				{
					name: "Production",
					location: { lat: 42.963892, lng: -72.056795 },
					cloud: "AWS",
					instances: [
						{
							name: "Credit",
							location: { lat: 42.963892, lng: -72.16795 },
							cloud: "AWS",
							online: true,
							instances: [
								{
									name: "Fdev",
									cloud: "AWS",
									location: {
										lat: 42.963892,
										lng: -72.16795,
									},
									instances: [],
								},
								{
									name: "Cleanroom",
									cloud: "AWS",
									location: {
										lat: 42.863892,
										lng: -72.14795,
									},
									instances: [],
								},
								{
									name: "Ns1",
									cloud: "AWS",
									location: {
										lat: 42.963892,
										lng: -72.26795,
									},
									instances: [],
								},
								{
									name: "QA",
									cloud: "AWS",
									location: {
										lat: 42.993892,
										lng: -72.17795,
									},
									instances: [],
								},
							],
						},
						{
							name: "Non - Credit",
							location: { lat: 42.463892, lng: -72.056795 },
							cloud: "AWS",
							online: true,
							instances: [
								{
									name: "Fdev2",
									cloud: "AWS",
									location: {
										lat: 42.563892,
										lng: -72.076795,
									},
									instances: [],
								},
								{
									name: "Cleanroom2",
									cloud: "AWS",
									location: {
										lat: 42.463892,
										lng: -72.056795,
									},
									instances: [],
								},
							],
						},
					],
				},
			],
		},
		{
			name: "NA - West Instances",
			location: { lat: 37.775234, lng: -122.418853 },
			cloud: "Cluster",
			instances: [
				{
					name: "Non Production",
					location: { lat: 37.775244, lng: -122.418843 },
					cloud: "GCP",
					instances: [
						{
							name: "Credit",
							location: {
								lat: 37.675221,
								lng: -122.518864,
							},
							cloud: "GCP",
							online: true,
							instances: [
								{
									name: "Fdev",
									cloud: "GCP",
									location: {
										lat: 37.675221,
										lng: -122.518864,
									},
									instances: [],
								},
							],
						},
					],
				},
				{
					name: "Non Production",
					location: { lat: 37.975234, lng: -122.118853 },
					cloud: "AWS",
					instances: [],
				},
				{
					name: "Production",
					location: { lat: 38.975234, lng: -122.118853 },
					cloud: "GCP",
					instances: [],
				},
			],
		},
		{
			name: "EU - Central",
			location: { lat: 51.500152, lng: 13.377778 },
			cloud: "Cluster",
			instances: [],
		},
	],
};
