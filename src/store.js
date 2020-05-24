import { writable } from "svelte/store";
import { readable } from "svelte/store";

export const isMenuOpen = writable(false);

export const slideUpClass = readable(isMenuOpen ? "slideOutUp" : "");
