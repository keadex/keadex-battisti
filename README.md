# Keadex Battisti

**Keadex Battisti** represents the shell of Keadex, the way to describe it.  

It's the first Keadex released module: a **web client** based on Next.js integrated with Strapi, an **headless CMS** to retrieve contents and to dynamically create pages by using a low code platform.  

The **monorepo** (managed with Lerna) is made up of three packages:

* **cms**: contains the Strapi code. By default the contents are not versioned but in order to let you to run the demo with my contents, I've used the "Strapi plugin content-export-import" to export the contents. These are placed under `cms/content-snapshot` folder.  
    **!!ATTENTION!!** **This is not a good practice! Do not version your contents!**
* **frontend**: contains the web client code
* **mock**: contains the code of the GraphQL mock server to test and to develop the frontend without waiting for the backend integration

Keadex Battisti is used as a showcase of the Keadex platform but it can easily adapted to satisfy any need. The development of a CLI is planned in order to minimize the effort needed to initialize a web client with the Keadex Battisti features (check the roadmap to track the planned capabilities)  

To start the project:  

1.  clone the monorepo: `git clone https://github.com/keadex/keadex-battisti.git`
1.  run `yarn install` under each package
1.  run `yarn install` under `cms/plugins/content-export-import` folder
1.  run `yarn build` under **cms** package.
1.  run `yarn dev` under **cms** package.
1.  import into Strapi demo contents from `cms/contents-snapshot` folder by using "Strapi plugin content-export-import"
1.  run `yarn dev` under **frontend** package