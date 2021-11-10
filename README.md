<p align="center">
  <a href="https://keadex.io/kealab#keadex-battisti">
    <img src="https://keadex.io:2053/uploads/keadex_battisti_dark_9ef872e108.png" width="350">
    <h2 align="center">Keadex Battisti</h21>
  </a>
</p>
</br>

# Description

**Keadex Battisti** represents the shell of Keadex, the way to describe it.  

It's the first Keadex released module: a **web client** based on Next.js integrated with Strapi, an **headless CMS** to retrieve contents and to dynamically create pages by using a low code platform.  

The **monorepo** (managed with Lerna) is made up of three packages:

* **cms**: contains the Strapi code. By default the contents are not versioned but in order to let you to run the demo with my contents, I've used the "Strapi plugin content-export-import" to export the contents. These are placed under `cms/content-snapshot` folder.  
    **!!ATTENTION!!** **This is not a good practice! Do not version your contents!**
* **frontend**: contains the web client code
* **mock**: contains the code of the GraphQL mock server to test and to develop the frontend without waiting for the backend integration

Keadex Battisti is used as a showcase of the Keadex platform but it can easily adapted to satisfy any need. The development of a CLI is planned in order to minimize the effort needed to initialize a web client with the Keadex Battisti features (check the roadmap to track the planned capabilities)  

To start the project:  

1. clone the monorepo: `git clone https://github.com/keadex/keadex-battisti.git`
2. run `lerna bootstrap` under the root folder
3. run `yarn install` under the `cms/plugins/content-export-import` folder
4. check your environment variables for both the **cms** and **frontend** packages
5. run `yarn build --clean` under the **cms** package.
6. run `yarn develop` under the **cms** package.
7. import into Strapi demo contents from `cms/contents-snapshot` folder by using the Strapi plugin [content-export-import](https://github.com/lazurey/strapi-plugin-content-export-import)
8. run `yarn dev` under the **frontend** package
</br>
</br>

# Notes
- Strapi does not support Yarn >2: check this [issue](https://github.com/strapi/strapi/issues/9109).</br>
Once will be added the support for Yarn >2, this project will be migrated and will be removed Lerna. The monorepo will be then managed with the Yarn workspaces feature. 