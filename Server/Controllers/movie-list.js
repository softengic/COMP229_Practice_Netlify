"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const Util_1 = require("../Util");
function DisplayMovieList(req, res, next) {
    movie_1.default.find().exec()
        .then(moviesCollection => {
        res.render('index', { title: 'Movie List', page: 'movie-list', displayName: (0, Util_1.UserDisplayName)(req), movies: moviesCollection });
    })
        .catch(err => {
        console.error(err);
        res.status(500).send(err.message);
    });
}
exports.DisplayMovieList = DisplayMovieList;
movie_1.default.find().exec();
//# sourceMappingURL=movie-list.js.map