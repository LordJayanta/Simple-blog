# Setup Environment Variables
[Home >](../README.md)

- [Vite Documentation](https://vitejs.dev/guide/env-and-mode)

### Step 1: Setting up the `.env` file
In the root folder, create a file named `.env`.  
>> Note: `/src` is not the root folder; it's located inside the root folder. SO, Root foler is : `/`

In this project, we have provided a file named `.env.samples` where all the environment variables required for this project are listed. You can either rename this file or create a new one.

If you're using `Vite`, be sure to prefix the variable names with `VITE_`. Suppose, you have created a variable called `VITE_VARIBLE_NAME`. To access these variables in your code, use `import.meta.env.VITE_VARIBLE_NAME`.

Example:
```
VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID=''
VITE_APPWRITE_DATABASE_ID=''
VITE_APPWRITE_COLLECTION_ID=''
VITE_APPWRITE_BUCKET_ID=''
```

### Step 2: Set up a `config` file [Best Practice]
>> This is optional but recommended for good practice.

In the `/src` folder, create a new folder named `config`, and inside that folder, create a file named `config.js`.

```js
const config = {
    author: String('LordJayanta'),
    serverUrl: String(import.meta.env.VITE_APPWRITE_URL),
    serverProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config;
```

--- 

