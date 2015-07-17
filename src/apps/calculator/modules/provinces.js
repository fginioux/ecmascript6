/**
 * Provinces list
 */
var p = [];
// Add all provinces informations
p.push({name: 'Alberta', abbr: 'AB', gst: 5, pst: 0});
p.push({name: 'Saskatchewan', abbr: 'SK', gst: 5, pst: 5});
p.push({name: 'Manitoba', abbr: 'MB', gst: 5, pst: 8});
p.push({name: 'Ontario', abbr: 'ON', gst: 13, pst: 0});
p.push({name: 'Terre-Neuve-et-Labrador', abbr: 'NL', gst: 13, pst: 0});
p.push({name: 'Nouveau-Brunswick', abbr: 'NB', gst: 13, pst: 0});
p.push({name: 'Nouvelle-Écosse', abbr: 'NS', gst: 15, pst: 0});
p.push({name: 'Ile-du-Prince-Édouard', abbr: 'PE', gst: 14, pst: 0});
p.push({name: 'Colombie Britannique', abbr: 'BC', gst: 5, pst: 7});
p.push({name: 'Québec', abbr: 'QC', gst: 5, pst: 9.975});
p.push({name: 'Territoires du Nord-Ouest', abbr: 'NT', gst: 5, pst: 0});
p.push({name: 'Nunavut', abbr: 'NU', gst: 5, pst: 0});
p.push({name: 'Yukon', abbr: 'YT', gst: 5, pst: 0});

var orderByNameAsc = (a, b) => {
	return (a.name == b.name)? 0 : (a.name > b.name)? 1 : -1;
}; 

/**
 * Module Provinces
 */
var Provinces = (function(){
	return {
		getByAbbr: function(abbr = 'QC'){
			var r = null;
			for(let i = 0, j = p.length; i < j; i++) {
				let province = p[i];
				if(province.abbr === abbr) {
					r = province;
					break;
				}
			}

			return r;
		},

		sort: function(){
			return p.sort(orderByNameAsc);
		}
	};
})();

export {Provinces};