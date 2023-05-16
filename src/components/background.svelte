<script type="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { Editable, Theatre } from '@threlte/theatre';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<div>
	<Canvas>
		<!-- <Theatre> -->
		<T.PerspectiveCamera makeDefault position={[0, -12, 0]} fov={24}>
			<!-- <Editable name="Camera" scale transform controls /> -->
			<OrbitControls maxPolarAngle={degToRad(80)} />
		</T.PerspectiveCamera>
		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.5} />

		<T.Mesh>
			<T.MeshBasicMaterial color="green" />
			<T.BoxGeometry args={[1, 32, 32]} />
		</T.Mesh>
		<!-- </Theatre> -->
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
