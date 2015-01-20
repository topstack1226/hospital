import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
    addCapability: 'add_visit',
    additionalModels: [{
        name: 'clinicList',
        findArgs: ['lookup','clinic_list']
    }, { 
        name: 'equipmentList',
        findArgs: ['lookup','equipment_list']
    }, { 
        name: 'physicianList',
        findArgs: ['lookup','physician_list']
    },  {
        name: 'locationList',
        findArgs: ['lookup','visit_location_list']
    }],
    moduleName: 'visits',
    newButtonText: '+ new visit',
    sectionTitle: 'Visits'
   
});