{
	inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
	outputs = { self, nixpkgs }: let
		system = "x86_64-linux";
		pkgs = nixpkgs.legacyPackages.${system};
	in {
		devShells.${system}.default = pkgs.mkShell {
			packages = with pkgs; [
				nodejs
				corepack
			];

			shellHook = ''
				echo "Running pnpm install ..."
				pnpm install --frozen-lockfile
			'';
		};
	};
}
