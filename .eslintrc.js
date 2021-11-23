module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "react/jsx-uses-react": "error" //解决引入React时报 未引用变量 的错误 
        //"react/jsx-uses-vars":"error" 
        //"react/jsx-uses-react": "off",
        //"react/react-in-jsx-scope": "off"
    }
};
