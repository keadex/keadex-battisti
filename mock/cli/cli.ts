import {terminal as term} from 'terminal-kit';
import { MockConfig } from './models';
import runMockServer from '../server/index';


// let term = createTerminal();
term.cyan('Welcome to the Keadex Battisti mocked server based on GraphQL.\n') ;
term.cyan('Select the mock profile you want to use.\n') ;

let mockConfig:MockConfig = require('../server/mock-config.json');

//mocks map with the default profile loaded... by default
let mergedMockMap:Map<String, String> = new Map<String, String>();

//returns the list of the profiles and load the mocks map of the default profile
var items = mockConfig.profiles.map((value, index)=> {
  if (value.name == "default"){
    value.mocksMap.forEach((value)=>{
      mergedMockMap.set(value.graphqlService, value.mockFileName);
    })
  }
  return index + ". " + value.name
});

//utility function to terminate the terminal on CTRL+C or CTRL+X
term.on( 'key' , function( name , matches , data ) {
	if ( name === 'CTRL_C' || name === 'CTRL_X') {
    term.grabInput( false ) ;
	  setTimeout( function() { process.exit() } , 100 ) ;
  }
} ) ;


//ask for the profile and run the GraphQL mock server with the mocks
//of the selected profile (merged with the ones of the default profile)
term.singleColumnMenu( items , function( error , response ) {
  term( '\n' ).eraseLineAfter.green("Mock profile \"%s\" loaded!\n", mockConfig.profiles[response.selectedIndex].name);
  
  //selected profile overrides default profile in case of duplicated mock service configuration
  let selectedProfile = mockConfig.profiles.filter((value, index)=>{
    return index==response.selectedIndex
  })
  if (selectedProfile && selectedProfile.length > 0){
    selectedProfile[0].mocksMap.forEach((value)=>{
      mergedMockMap.set(value.graphqlService, value.mockFileName);
    });
    // console.log(mergedMockMap);
    runMockServer(mergedMockMap);
  }else{
    console.error("Profile not found.")
  }
  
  
}) ;

