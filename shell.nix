# Setup a Nix environment for the project
# For a general overview of Nix, see: https://nixos.org/
# 
# A more beginner-friendly approach to Nix: 
# https://nix.libdb.so/slides
# 
# shell.nix reference:
# https://github.com/acmcsufoss/api.acmcsuf.com/blob/main/shell.nix

{ sysPkgs ? import <nixpkgs> {} }:

let
	pkgs = import (sysPkgs.fetchFromGitHub {
		owner = "NixOS";
		repo = "nixpkgs";
		# most recent commit as of 11/13/23
		rev = "bb142a6838c823a2cd8235e1d0dd3641e7dcfd63";
		hash = "sha256:0nbicig1zps3sbk7krhznay73nxr049hgpwyl57qnrbb0byzq9iy";
	}) {};
	
in pkgs.mkShell {
	buildInputs = with pkgs; [
        # Setup Deno and other web stuff 
        deno
	];
}