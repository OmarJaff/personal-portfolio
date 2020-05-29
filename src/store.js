import { writable } from "svelte/store";

export const isMenuOpen = writable(false);

export const slideNavClass = writable("");

export const menuClass = writable("");
